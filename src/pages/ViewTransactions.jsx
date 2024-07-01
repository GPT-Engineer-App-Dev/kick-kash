import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

const placeholderTransactions = [
  { id: 1, date: "2023-10-01", amount: 100, type: "Income", category: "Nike" },
  { id: 2, date: "2023-10-02", amount: 200, type: "Expense", category: "Adidas" },
  { id: 3, date: "2023-10-03", amount: 150, type: "Income", category: "Puma" },
];

function ViewTransactions() {
  const [transactions, setTransactions] = useState(placeholderTransactions);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    toast.success("Transaction deleted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">View Transactions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>
                <Button variant="secondary" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(transaction.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ViewTransactions;