const authErrorsES = require('./es/auth-errors.json');
const firestoreErrorsES = require('./es/firestore-errors.json');

type indexKeySignature = {
  [key: string]: string;
};

const authErrorCode: indexKeySignature = authErrorsES;

export function i18nFirebaseError(errorCode: string, defaultMessage: string = ''): string {
  if (authErrorCode.hasOwnProperty(errorCode)) {
    return authErrorCode[errorCode];
  } else if (firestoreErrorsES.hasOwnProperty(errorCode)) {
    return firestoreErrorsES[errorCode];
  }
  return defaultMessage;
}
