const sharedHeaders: RequestInit = {
  headers: {
    Accept: "application/json",
  },
};

function _verifyJson<T>(response: Response): Promise<T | null> | null {
  if (!response || !response.ok) {
    return null;
  }

  return response.json();
}

async function GET<T>(route: string): Promise<T> {
  const response = await fetch(route, sharedHeaders);
  return response.json();
}

async function POST<T>(route: string, data: T): Promise<T | null> {
  const response = await fetch(route, {
    ...sharedHeaders,
    method: "POST",
    body: JSON.stringify(data),
  });

  return _verifyJson<T>(response);
}

async function PUT<T>(route: string, data: T): Promise<T | null> {
  const response = await fetch(route, {
    ...sharedHeaders,
    method: "PUT",
    body: JSON.stringify(data),
  });

  return _verifyJson<T>(response);
}

async function PATCH<T>(
  route: string,
  data: Partial<T>
): Promise<T | Partial<T> | null> {
  const response = await fetch(route, {
    ...sharedHeaders,
    method: "PATCH",
    body: JSON.stringify(data),
  });

  return _verifyJson<T>(response);
}

async function DELETE(route: string) {
  await fetch(route, {
    ...sharedHeaders,
    method: "DELETE",
  });
}

export default { GET, POST, DELETE, PUT, PATCH };
