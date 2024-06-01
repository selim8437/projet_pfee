import {  useEffect, useState } from "react";
import { updateUser } from "@/app/lib/users";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User } from "@/app/lib/types/user";

export function EditButtonUser({ user, onUserUpdate }: { user: User, onUserUpdate: () => void }) {
  const [id, setId] = useState(user.id);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [type, setType] = useState(user.type);
  const [firstName, setFirstName] = useState(user.firstName);

  // Initialize imageTest array with false values corresponding to images length
  const [storeid, setStoreId] = useState(user.storeid);
  const [storeidd, setStoreIdd] = useState('');
  useEffect(()=>{
    if(storeid===null){
      setStoreIdd("") ;
    }else{
      setStoreIdd(storeid) ;
    }
  },[])

  const isEmptyString = (str: string): boolean => {
    return !str || str.trim().length === 0;
  };

  

  

  const handleSubmit = (e: { preventDefault: () => void }) => {
    const updateduser: User = { id, firstName, lastName, email, type, storeid };
    updateUser(updateduser)
      .then(() => {
        // Call the onuserUpdate callback function after successful update
        onUserUpdate();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit user</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" value={ lastName} onChange={(e) => setLastName(e.target.value)} id="name" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right" htmlFor="firstName">
                firstName
            </Label>
                        <Input className="col-span-3" value={ firstName} onChange={(e) => setFirstName(e.target.value)} id="name" />

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-3" value={email} onChange={(e) => setEmail(e.target.value)} id="email"  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="storeId">
              StoreId
            </Label>
            <Input className="col-span-3" value={storeidd} onChange={(e) => setStoreId(e.target.value)} id="storeId"  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="price">
              Type
            </Label>
            <Textarea className="col-span-3" value={type} onChange={(e) => setType(e.target.value)} id="type"  />
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
