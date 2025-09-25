"use server";

export async function handleWeb3FormSubmission(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields." };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "a12f1f6d-e918-4c67-a699-f049a6176dad",
      name,
      email,
      message,
    }),
  });

  const result = await response.json();
  return result;
}
