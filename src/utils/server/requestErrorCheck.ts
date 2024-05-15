export function requestErrorCheck(parameter: any, errorMessage: string, status?: number) {
  if (!parameter) {
    return new Response(errorMessage, { status: status ? status : 400 });
  }
}
