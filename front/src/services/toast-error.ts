import toast from 'react-hot-toast';

/**
 * Used to handle the error and show a modal on the screen
 * @param error - error object
 */

export const ThrowToastError = (error: any) => {
  console.error(error.message);
  let message: string;
  if (Array.isArray(error.response.data.message)) {
    message = error.response.data.message[0];
  } else {
    message = error.response.data && error.response.data.message;
  }
  toast.error(message || error.message);
};
