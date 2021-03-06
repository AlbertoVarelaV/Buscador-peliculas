import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '../config/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
