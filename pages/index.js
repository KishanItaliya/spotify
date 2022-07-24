import { getToken } from "next-auth/jwt";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;

export async function getServerSideProps({ req }) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  if (!token && req.url !== "/login") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
