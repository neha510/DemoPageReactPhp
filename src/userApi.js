// userApi.js
const API_URL = '/api/users';

// Fetch all users from the backend
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// Create a new user
export const createUser = async (name, email) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    const userId = await response.text();
    console.log('New user ID:', userId);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

// Update a user
export const updateUser = async (id, name, email) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    console.log('User updated successfully');
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    console.log('User deleted successfully');
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
