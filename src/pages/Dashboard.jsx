import Products from "../components/Products";

const Dashboard = () => {
  return (
    <div className=" w-full h-full lg:p-5 p-2 flex flex-col items-center mt-16">
      <h1 className=" text-blue-800 font-bold font-serif mb-6 text-4xl">All Products</h1>
      <Products />
    </div>
  )
}

export default Dashboard;
