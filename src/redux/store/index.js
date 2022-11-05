import { configureStore } from '@reduxjs/toolkit';
import reducer from './configure';

export default configureStore({ reducer });
