import addBook from "../../../public/addBook.json";
import PageTitle from "../../component/PageTitle";
import AllBookTable from "./AllbookTable/AllBookTable";
 
const AllBook = () => {
    return (
        <div className="mt-8">
                     <PageTitle  addBook={addBook} title="All Book " />
                     <AllBookTable />

        </div>
    );
};

export default AllBook;