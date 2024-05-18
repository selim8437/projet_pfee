import {  useState } from "react";
import { updateStore } from "@/app/lib/stores";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Store } from "@/app/lib/types/store";
import ButtonUpload from "@/app/ui/uploader-button";

export function EditButtonStore({ store, onStoreUpdate }: { store: Store, onStoreUpdate: () => void }) {
  const [id, setId] = useState(store.id);
  const [name, setName] = useState(store.name);
  const [logo, setLogo] = useState(store.logo);
  const [banner, setBanner] = useState(store.banner);
  const [description, setDescription] = useState(store.description);
  const [categoryId, setCategoryId] = useState(store.categoryId);
  const [userId, setUserId] = useState(store.userId);
  const [verifUrl, setVerifUrl] = useState(store.verifUrl);
  const [verifState, setVerifState] = useState(store.verifState);
  const [shippingOptions, setShippingOptions] = useState(store.shippingOptions);
  const [returnPolicies, setReturnPolicies] = useState(store.returnPolicies);
  const [changeButtonLogo,setChangeButtonLogo]=useState(false) ;
  const [changeButtonBanner,setChangeButtonBanner]=useState(false) ;

  

  

  const isEmptyString = (str: string): boolean => {
    return !str || str.trim().length === 0;
  };
  const handleLogoUrlChange =(url:string)=>{
    setLogo(url) ;
  }
  const handleBannerUrlChange =(url:string)=>{
    setBanner(url) ;
  }
  const handleChangeButtonLogo=()=>{
    setChangeButtonLogo(true) ;
  }
  const handleChangeButtonBanner=()=>{
    setChangeButtonBanner(true)
  }

  

  const handleSubmit = (e: { preventDefault: () => void }) => {
    const updatedStore: Store = { id, name, logo, banner, description, categoryId,userId,verifUrl,verifState,shippingOptions,returnPolicies };
    updateStore(updatedStore)
      .then(() => {
        // Call the onStoreUpdate callback function after successful update
        onStoreUpdate();
      })
      .catch((error) => {
        console.error("Error updating Store:", error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Store</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" value={ name} onChange={(e) => setName(e.target.value)} id="name" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right" htmlFor="image">
                        Logo
                    </Label>
                    <div>
                        {changeButtonLogo ? (
                            <ButtonUpload onImageUrlChange={handleLogoUrlChange} />
                                ) : (
                                    <div>
                                        <img
                                            alt="Product Image"
                                            className="aspect-square object-cover rounded-md"
                                            height={100}
                                            src={logo}
                                            width={100}
                                        />
                                        <Button onClick={() => handleChangeButtonLogo()} className="mt-2" size="sm" variant="outline">
                                            Change Image
                                        </Button>
                                    </div>
                         )}
                    </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right" htmlFor="image">
                        Banner
                    </Label>
                    <div>
                        {changeButtonBanner ? (
                            <ButtonUpload onImageUrlChange={handleBannerUrlChange} />
                                ) : (
                                    <div>
                                        <img
                                            alt="Product Image"
                                            className="aspect-square object-cover rounded-md"
                                            height={100}
                                            src={banner}
                                            width={100}
                                        />
                                        <Button onClick={() => handleChangeButtonBanner()} className="mt-2" size="sm" variant="outline">
                                            Change Image
                                        </Button>
                                    </div>
                         )}
                    </div>
            </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-3" value={description} onChange={(e) => setDescription(e.target.value)} id="description"  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="storeId">
              StoreId
            </Label>
            <Input className="col-span-3" value={verifState} onChange={(e) => setVerifState(e.target.value)} id="storeId"  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="price">
              Type
            </Label>
            <Textarea className="col-span-3" value={shippingOptions} onChange={(e) => setShippingOptions(e.target.value)} id="type"  />
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
