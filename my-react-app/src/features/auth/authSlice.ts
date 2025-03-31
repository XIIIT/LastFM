
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Симуляция API - потом заменить на Back
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      // Симуляция запроса
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Для Демо персонажей
      const users = [
        { id: '1', username: 'Admin', email: 'user@example.com', password: 'FW2qqVuvf!vk7!N' },
      ];
      
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        return rejectWithValue('Invalid credentials');
      }
      
      const { password: _, ...userWithoutPassword } = user;
      const token = `mock-jwt-token-${user.id}`;
      
      localStorage.setItem('token', token);
      return { user: userWithoutPassword, token };
    } catch (error) {
      return rejectWithValue('Ошибка. Попробуйте снова.');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ 
    username, 
    email, 
    password 
  }: { 
    username: string; 
    email: string; 
    password: string; 
  }, { rejectWithValue }) => {
    try {
      // Симуляция запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Переделать на Back
      const newUser = {
        id: `user-${Date.now()}`,
        username,
        email,
        password
      };
      const token = `mock-jwt-token-${newUser.id}`;
      
      localStorage.setItem('token', token);
      return { user: newUser, token };
    } catch (error) {
      return rejectWithValue('Ошибка. Попробуйте снова.');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
