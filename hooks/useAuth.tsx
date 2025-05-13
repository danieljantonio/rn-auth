import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define types for our auth context
type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider props
type AuthProviderProps = {
  children: ReactNode;
};

// Create the auth provider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is logged in on mount
  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      console.log('login', email, password);
      setIsLoading(true);

      // In a real app, you would make an API call here
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data
      const userData: User = {
        id: '1',
        email,
        name: 'Demo User',
      };

      // Save user data to storage
      await AsyncStorage.setItem('user', JSON.stringify(userData));

      // Update state
      setUser(userData);
      setIsAuthenticated(true);

      // Navigate to the main app
      router.replace('/(root)/(drawer)');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, name?: string) => {
    try {
      setIsLoading(true);

      // In a real app, you would make an API call here
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data
      const userData: User = {
        id: '1',
        email,
        name: name || 'New User',
      };

      // Save user data to storage
      await AsyncStorage.setItem('user', JSON.stringify(userData));

      // Update state
      setUser(userData);
      setIsAuthenticated(true);

      // Navigate to the main app
      router.replace('/(root)/(drawer)');
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      console.log('LOGOUT Start');
      setIsLoading(true);

      // Clear user data from storage
      await AsyncStorage.removeItem('user');

      // Update state
      setUser(null);
      setIsAuthenticated(false);

      // Navigate to login
      router.replace('/(root)/login');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      console.log('LOGOUT DONE');
      setIsLoading(false);
    }
  };

  // Reset password function
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true);

      // In a real app, you would make an API call here
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message or navigate to a confirmation screen
      console.log(`Password reset email sent to ${email}`);
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Create the context value
  const value = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
