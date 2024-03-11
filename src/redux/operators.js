import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const responce = await axios.get('https://65e58256d7f0758a76e68a5d.mockapi.io/contacts');
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const responce = await axios.delete(
        `https://65e58256d7f0758a76e68a5d.mockapi.io/contacts/${taskId}`
      );
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactAndUpdateList = createAsyncThunk(
  'contacts/deleteContactAndUpdateList',
  async (taskId, thunkAPI) => {
    try {
      await thunkAPI.dispatch(deleteContact(taskId));
      await thunkAPI.dispatch(fetchContacts());
      return taskId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const responce = await axios.post(`https://65e58256d7f0758a76e68a5d.mockapi.io/contacts/`, {
        name,
        phone,
      });
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);