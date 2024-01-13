import { toTinyError } from '@konker.dev/tiny-error-fp';

export const ERROR_TAG = 'TinyFileSystemError';
export type ERROR_TAG = typeof ERROR_TAG;

export const toTinyFileSystemError = toTinyError<ERROR_TAG>(ERROR_TAG);
export type TinyFileSystemError = ReturnType<typeof toTinyFileSystemError>;
