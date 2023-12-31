import { auth, currentUser } from "@clerk/nextjs";

const ProtectedPage = async () => {
  const user = await currentUser();
  const { userId } = auth();

  return (
    <div className="">
      User: {user?.firstName}
      UserId: {userId}
    </div>
  );
};

export default ProtectedPage;
