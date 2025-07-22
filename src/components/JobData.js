export const jobData = async () => {
  const Response = await fetch("http://localhost:3060/jobs");
  return Response.json();
};
export const jobDetails = async ({ params }) => {
  const { id } = params;
  const Response = await fetch("http://localhost:3060/jobs/" + id);
  return Response.json();
};
