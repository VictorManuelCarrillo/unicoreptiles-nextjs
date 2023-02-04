export default function AdminHomePage({animals}) {

  return (
    <div>admin</div>
  )
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/api/animals`);
  const animals = await res.json();

  return {
    props: {
      animals,
    },
  };
};