export function authorizationCheck(request: Request): string {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return 'Unauthorized';
  }

  return authHeader.split('Bearer ')[1];
}
