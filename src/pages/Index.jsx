import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Sneaker Accounting</h1>
      <p className="mb-4">Track your sneaker transactions easily.</p>
      <div className="space-x-4">
        <Link to="/add-transaction">
          <Button variant="primary">Add Transaction</Button>
        </Link>
        <Link to="/view-transactions">
          <Button variant="secondary">View Transactions</Button>
        </Link>
      </div>
    </div>
  );
}

export default Index;