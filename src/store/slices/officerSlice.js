import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { COLLECTIONS } from '../../utils/constants';

export const fetchOfficers = createAsyncThunk('officer/fetchAll', async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTIONS.OFFICERS));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const addOfficer = createAsyncThunk('officer/add', async (officerData) => {
  const docRef = await addDoc(collection(db, COLLECTIONS.OFFICERS), {
    ...officerData,
    createdAt: Timestamp.now()
  });
  return { id: docRef.id, ...officerData };
});

export const updateOfficer = createAsyncThunk('officer/update', async ({ id, data }) => {
  const docRef = doc(db, COLLECTIONS.OFFICERS, id);
  await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() });
  return { id, ...data };
});

export const deleteOfficer = createAsyncThunk('officer/delete', async (id) => {
  await deleteDoc(doc(db, COLLECTIONS.OFFICERS, id));
  return id;
});

const officerSlice = createSlice({
  name: 'officer',
  initialState: {
    officers: [],
    loading: false,
    error: null
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfficers.fulfilled, (state, action) => {
        state.officers = action.payload;
      })
      .addCase(addOfficer.fulfilled, (state, action) => {
        state.officers.push(action.payload);
      })
      .addCase(updateOfficer.fulfilled, (state, action) => {
        const index = state.officers.findIndex(o => o.id === action.payload.id);
        if (index !== -1) {
          state.officers[index] = { ...state.officers[index], ...action.payload };
        }
      })
      .addCase(deleteOfficer.fulfilled, (state, action) => {
        state.officers = state.officers.filter(o => o.id !== action.payload);
      });
  }
});

export const { clearError } = officerSlice.actions;
export default officerSlice.reducer;