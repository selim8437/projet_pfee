import {  useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Category } from "@/app/lib/types/category";
import { updateCategory } from "@/app/lib/categories";

export function EditButtonCateg({ category, onCategoryUpdate }: { category: Category, onCategoryUpdate: () => void }) {
  const [id, setId] = useState(category.id);
  const [categoryname, setcategoryName] = useState(category.categoryname);
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    const updatedCategory: Category = { id, categoryname};
    updateCategory(updatedCategory)
      .then(() => {
        // Call the onProductUpdate callback function after successful update
        onCategoryUpdate();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Id
            </Label>
            <Input className="col-span-3" value={id} disabled onChange={(e) => setId(e.target.value)} id="id" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" value={categoryname}  onChange={(e) => setcategoryName(e.target.value)} id="name" />
          </div>
         
          
          
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type="submit">Save Changes</Button>
            </DialogTrigger>
           
          </DialogFooter>
    </form>
    
  
      </DialogContent>
    </Dialog>
  );
}
