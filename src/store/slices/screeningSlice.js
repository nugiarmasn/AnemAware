import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, updateDoc, doc, query, where, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { COLLECTIONS, SCREENING_STATUS } from '../../utils/constants';
import { calculateRiskLevel } from '../../utils/helpers';

export const addScreening = createAsyncThunk('screening/add', async (screeningData) => {
  const riskLevel = calculateRiskLevel(screeningData.hbLevel, screeningData.gender);
  const docRef = await addDoc(collection(db, COLLECTIONS.SCREENINGS), {
    ...screeningData,
    riskLevel,
    createdAt: Timestamp.now(),
    status: screeningData.status || SCREENING_STATUS.APPROVED
  });
  return { id: docRef.id, ...screeningData, riskLevel };
});

export const fetchScreenings = createAsyncThunk('screening/fetchAll', async () => {
  const q = query(collection(db, COLLECTIONS.SCREENINGS), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const fetchPendingScreenings = createAsyncThunk('screening/fetchPending', async () => {
  const q = query(
    collection(db, COLLECTIONS.SCREENINGS),
    where('status', '==', SCREENING_STATUS.PENDING),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const updateScreeningStatus = createAsyncThunk('screening/updateStatus', async ({ id, status }) => {
  const docRef = doc(db, COLLECTIONS.SCREENINGS, id);
  await updateDoc(docRef, { status, updatedAt: Timestamp.now() });
  return { id, status };
});

const screeningSlice = createSlice({
  name: 'screening',
  initialState: {
    screenings: [],
    pendingScreenings: [],
    loading: false,
    error: null,
    stats: {
      ringan: 0,
      sedang: 0,
      berat: 0,
      total: 0
    }
  },
  reducers: {
    setLiveScreenings: (state, action) => {
      state.screenings = action.payload;
      state.stats = calculateStats(action.payload);
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addScreening.pending, (state) => {
        state.loading = true;
      })
      .addCase(addScreening.fulfilled, (state, action) => {
        state.loading = false;
        state.screenings.unshift(action.payload);
        state.stats = calculateStats(state.screenings);
      })
      .addCase(addScreening.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchScreenings.fulfilled, (state, action) => {
        state.screenings = action.payload;
        state.stats = calculateStats(action.payload);
      })
      .addCase(fetchPendingScreenings.fulfilled, (state, action) => {
        state.pendingScreenings = action.payload;
      })
      .addCase(updateScreeningStatus.fulfilled, (state, action) => {
        const index = state.pendingScreenings.findIndex(s => s.id === action.payload.id);
        if (index !== -1) {
          state.pendingScreenings.splice(index, 1);
        }
      });
  }
});

const calculateStats = (screenings) => {
  const approved = screenings.filter(s => s.status === SCREENING_STATUS.APPROVED);
  return {
    ringan: approved.filter(s => s.riskLevel === 'Ringan').length,
    sedang: approved.filter(s => s.riskLevel === 'Sedang').length,
    berat: approved.filter(s => s.riskLevel === 'Berat').length,
    total: approved.length
  };
};

export const { setLiveScreenings, clearError } = screeningSlice.actions;
export default screeningSlice.reducer;