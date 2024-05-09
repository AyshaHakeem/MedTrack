import { httpStatusCodes } from "./NetworkTypes";

interface iValidationErrorDetails {
  source: string;
  keys: Array<string | number>;
  message: string;
}

type ValidationErrorsType = Record<string, iValidationErrorDetails>;

interface iResponseMeta {
  URID: string;
}

interface iServiceError {
  error: string;
  message: string;
  validationErrors?: ValidationErrorsType | null;
}

type NullableServiceError = iServiceError | null;

interface iGenericServiceResult<SuccessDataType> {
  isSuccess: boolean;
  httpStatusCode: httpStatusCodes;
  error: NullableServiceError;
  meta: iResponseMeta;
  data: SuccessDataType;
}

type NullableGenericServiceResult<SuccessDataType> =
  iGenericServiceResult<SuccessDataType> | null;

export type {
  iValidationErrorDetails,
  ValidationErrorsType,
  iResponseMeta,
  iServiceError,
  NullableServiceError,
  iGenericServiceResult,
  NullableGenericServiceResult,
};
