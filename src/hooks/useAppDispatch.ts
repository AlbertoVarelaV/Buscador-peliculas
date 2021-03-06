import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../config/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
