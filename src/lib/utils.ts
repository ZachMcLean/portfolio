export const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return false;
	}
	return true;
};

// this error handling is necessary because we don't know that the 3rd party library returns
// so we need to account for an Event object, whether it exists, errors properties types (object and message)
// this is all bc error can literally be anything
export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "UnkNown Error";
	}
	return message;
};
