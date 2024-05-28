/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/bgguDiL5yom
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Arimo } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import ImageUpload from "@/app/ui/uploader";
import { SetStateAction, useEffect, useState } from "react";

import {  getStoreByid, updateStoreWithCategory } from "@/app/lib/stores";
import { useUser } from "@clerk/nextjs";
import {Banner} from '@/components/component/banner'
import DashboardSkeleton from "@/app/ui/skeletons";
import { ProfileLogo } from "./profile-logo";

export default function StoreCustomization() {
  const [logoTest, setLogoTest] = useState(false);
  const [bannerTest, setBannerTest] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [storeCategory, setStoreCategory] = useState('');
  const [shippingOption, setShippingOption] = useState('');
  const [returnPolicy, setReturnPolicy] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  const { user } = useUser();
  
  const userId = user?.id; // Get the user ID or undefined if user is null/undefined
  const isEmptyString = (str: string): boolean => {
    return str.trim().length === 0;
   
  };
  

  
  
  useEffect(() => {
    const handleGetStore = async () => {
      if (user?.id) {
        try {
          const result = await getStoreByid(user.id);
          
            // Update state only after fetching is complete
              setStoreName(result.name);
            

              setLogoUrl(result.logo);
            

              setBannerUrl(result.banner);
            

              setStoreDescription(result.description);
            

              setStoreCategory(result.categoryId);
            

              setShippingOption(result.shippingOptions);
            

              setReturnPolicy(result.returnPolicies);
            
           
            if (isEmptyString(result.logo)===false){
              setLogoTest(true);
            }
            console.log(bannerUrl);
            if (isEmptyString(result.banner)===false){
              setBannerTest(true);
            }
          
        } catch (error) {
          console.error('Error fetching store:', error);
        } finally {
         
          // Update loading status after fetching is complete
          setIsLoading(false);
          

        }
      }
    };
  
    handleGetStore();
  }, [user]); // Add user as a dependency
  
  
  const handleLogoUrlChange = (url: SetStateAction<string>) => {
    setLogoUrl(url);
    setLogoTest(true);
  };
  const handleBannerUrlChange = (url: SetStateAction<string>) => {
    setBannerUrl(url);
    setBannerTest(true);

  };
  

  const handleSaveChanges = () => {
   async function storeCustom() {
      if (user) {
        const userId = user.id;
         // Get the user ID
        updateStoreWithCategory(userId,storeName, logoUrl, bannerUrl, storeDescription, storeCategory, shippingOption, returnPolicy) 
          
      
        console.log("Store updated successfully",userId);
      } else {
        console.log("User not logged in",user);
      }
    } 
    storeCustom();        
  }
  const handleChangeImageBanner =()=>{
    setBannerTest(false)
  }
  const handleChangeImageLogo =()=>{
    setLogoTest(false)
  }
  return (
    <>
    {isLoading ? (
      <div><DashboardSkeleton/></div>
    ) : (
    <div>
     <div >
      <div className="flex justify-center">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 w-full max-w-4xl">
          {/* Store Name */}
          <div className="col-span-1 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Store Name</CardTitle>
              </CardHeader>
              <CardContent>
                <Input className="w-full" value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="Enter your store name" type="text" />
              </CardContent>
            </Card>
          </div>
          {/* Store Logo */}
          <div className="col-span-1 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Store Logo</CardTitle>
              </CardHeader>
              <CardContent>
              {logoTest ? (
                <ProfileLogo url={logoUrl}/>
                                
              ) : (
                <div className="flex items-center justify-center" >
                <ImageUpload onImageUrlChange={handleLogoUrlChange} />
                </div>
              )}
              
               
              </CardContent>
              {logoTest ? (
                <CardFooter className="flex justify-center items-center mt-8">
                    <Button onClick={handleChangeImageLogo}>Change image</Button>
                </CardFooter>        
              ) : (
                <div >
                </div>
              )}
            </Card>
          </div>
          {/* Store Banner */}
          <div className="col-span-1 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Store Banner</CardTitle>
              </CardHeader>
              <CardContent>
              {bannerTest ? (
                <Banner url={bannerUrl} />
               
              ) : (
              
                <div className="flex items-center justify-center" >
                  <ImageUpload onImageUrlChange={handleBannerUrlChange} />                  
                </div>

              )}
              </CardContent>
              {bannerTest ? (
                <CardFooter className="flex justify-center items-center mt-8">
                    <Button onClick={handleChangeImageBanner}>Change image</Button>
                </CardFooter>        
              ) : (
                <div >
                </div>
              )}
            </Card>
          </div>
          {/* Store Description */}
          <div className="col-span-2 lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Store Description</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="h-32 w-full"
                  value={storeDescription}
                  onChange={(e) => setStoreDescription(e.target.value)}
                  placeholder='Enter store description'
                />
              </CardContent>
            </Card>
          </div>
          {/* Store Categories */}
          <div className="col-span-2 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Input  value={storeCategory} className="w-full"  onChange={(e) => setStoreCategory(e.target.value)}  type="text" />
              </CardContent>
            </Card>
          </div>
          {/* Shipping Options */}
          <div className="col-span-2 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Shipping options</CardTitle>
              </CardHeader>
              <CardContent>
              <Textarea
                  className="h-32 w-full"
                  maxLength={200}
                  value={shippingOption}
                  onChange={(e) => setShippingOption(e.target.value)}
                  placeholder="Enter your shipping options"
                />              </CardContent>
            </Card>
          </div>
          {/* Return Policy */}
          <div className="col-span-2 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Return Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="h-32 w-full"
                  maxLength={400}
                  value={returnPolicy}
                  onChange={(e) => setReturnPolicy(e.target.value)}
                  placeholder="Enter your return policy"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex justify-center mt-8">
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
    </div>
    )}
    </>
  );}
