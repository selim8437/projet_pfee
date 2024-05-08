import { Product } from "@/app/lib/types/prduct"; // Corrected spelling
import { useEffect, useState } from "react";
import ImageUpload from "@/app/ui/uploader";
import { updateProduct } from "@/app/lib/products";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ButtonUpload from "@/app/ui/uploader-button";

export function EditButton({ product, onProductUpdate }: { product: Product, onProductUpdate: () => void }) {
  const [id, setId] = useState(product.id);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [specifications, setSpecifications] = useState(product.specifications);
  const [storeId, setStoreId] = useState(product.storeId);
  // Initialize imageTest array with false values corresponding to images length
  const [imageTest, setImageTest] = useState(Array.from({ length: product.images.length }, () => false));
  const [images, setImageUrls] = useState(product.images);

  const handleImageUrlChange = (url: React.SetStateAction<string>, index: number) => {
    const currentImages = [...images];
    const newUrl = typeof url === 'function' ? url(currentImages[index]) : url;
    const newImageChanged = [...currentImages];
    newImageChanged[index] = newUrl;
    setImageUrls(newImageChanged);
    const newTestChanged = [...imageTest];
    newTestChanged[index] = false;
    setImageTest(newTestChanged);
  };

  const isEmptyString = (str: string): boolean => {
    return !str || str.trim().length === 0;
  };

  useEffect(() => {
    images.forEach((imageUrl, index) => {
      if (isEmptyString(imageUrl)) {
        const newImageChanged = [...imageTest];
        newImageChanged[index] = true;
        setImageTest(newImageChanged);
      }
    });
  }, []);

  const handleChangeButton = (index: number): void => {
    const newImageChanged = [...imageTest];
    newImageChanged[index] = true;
    setImageTest(newImageChanged);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    const updatedProduct: Product = { id, title, description, price, quantity, images, specifications, storeId };
    updateProduct(updatedProduct)
      .then(() => {
        // Call the onProductUpdate callback function after successful update
        onProductUpdate();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-center gap-4">
            {images.map((imageUrl, index) => (
              <div key={index} className="flex flex-col gap-4">
                <Label className="text-right" htmlFor="image">
                  <p>Picture {index + 1}</p>
                </Label>
                <div>
                  {imageTest[index] ? (
                    <ButtonUpload onImageUrlChange={(a) => handleImageUrlChange(a, index)} />
                  ) : (
                    <div>
                      <img
                        alt="Product Image"
                        className="aspect-square object-cover rounded-md"
                        height={100}
                        src={imageUrl}
                        width={100}
                      />
                      <Button onClick={() => handleChangeButton(index)} className="mt-2" size="sm" variant="outline">
                        Change Image
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" value={title} onChange={(e) => setTitle(e.target.value)} id="name" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="col-span-3 h-24"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="price">
              Price
            </Label>
            <Input className="col-span-3" value={price} onChange={(e) => setPrice(+e.target.value)} id="price" type="number" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="price">
              Quantiy
            </Label>
            <Input className="col-span-3" value={quantity} onChange={(e) => setQuantity(+e.target.value)} id="quantity" type="number" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="price">
              Specifications
            </Label>
            <Textarea className="col-span-3" value={specifications} onChange={(e) => setSpecifications(e.target.value)} id="specifications"  />
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
