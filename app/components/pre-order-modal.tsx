"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PreOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PreOrderModal({
  open,
  onOpenChange,
}: PreOrderModalProps) {
  const [formState, setFormState] = useState({
    firstName: "",
    familyName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    province: "",
    pelakNumber: "",
    phoneNumber: "",
    country: "",
    edition: "standard",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditionChange = (value: string) => {
    setFormState((prev) => ({ ...prev, edition: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        onOpenChange(false);
        setFormState({
          firstName: "",
          familyName: "",
          email: "",
          address: "",
          city: "",
          zipCode: "",
          pelakNumber: "",
          phoneNumber: "",
          province: "",
          country: "",
          edition: "standard",
          specialRequests: "",
        });
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                فرم پیش ثبت نام
              </DialogTitle>
              <DialogDescription className="text-center">
                جزو اولین نفراتی باشید که کتاب رو دریافت میکنه
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4" dir="rtl">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      placeholder="نام"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="familyName">نام خانوادگی</Label>
                    <Input
                      id="familyName"
                      name="familyName"
                      value={formState.familyName}
                      onChange={handleChange}
                      placeholder="نام خانوادگی"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2" dir="rtl">
                  <Label htmlFor="phoneNumber">شماره همراه</Label>
                  <Input
                    id="phoneNumber"
                    dir="rtl"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleChange}
                    placeholder="شماره همراه"
                    type="tel"
                    pattern=""
                    required
                  />
                </div>
                <div className="space-y-2" dir="rtl">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="ایمیل"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4" dir="rtl">
                  <div className="space-y-2">
                    <Label htmlFor="province">استان</Label>
                    <Input
                      id="province"
                      name="province"
                      value={formState.province}
                      onChange={handleChange}
                      placeholder="استان"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">شهرستان</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formState.city}
                      onChange={handleChange}
                      placeholder="شهرستان"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2" dir="rtl">
                  <Label htmlFor="address">آدرس دقیق</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleChange}
                    placeholder="آدرس دقیق"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2" dir="rtl">
                    <Label htmlFor="zipCode">کدپستی</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formState.zipCode}
                      onChange={handleChange}
                      placeholder="کدپستی"
                      required
                    />
                  </div>
                  <div className="space-y-2" dir="rtl">
                    <Label htmlFor="pelakNumber">پلاک</Label>
                    <Input
                      id="pelakNumber"
                      name="pelakNumber"
                      value={formState.pelakNumber}
                      onChange={handleChange}
                      placeholder="(اختیاری)"
                    />
                  </div>
                </div>
              </div>

              <DialogFooter className="pt-4 gap-4">
                <Button
                  type="button"
                  className="bg-[#D00000] hover:bg-[#CCE3DE] sm:w-20 "
                  onClick={() => onOpenChange(false)}
                  disabled={isSubmitting}
                >
                  لغو
                </Button>
                <Button
                  type="submit"
                  className="bg-[#3A5A40] hover:bg-[#A3B18A] sm:w-56 "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      در حال اجرا...
                    </span>
                  ) : (
                    "پرداخت"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-8"
          >
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              ثبت نام با موفقیت انجام شد
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              از اعتماد شما سپاسگزاریم.به محض اینکه کتاب شما آماده شد به شما
              اطلاع خواهیم داد.
            </p>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                setIsSubmitted(false);
                onOpenChange(false);
              }}
            >
              بستن
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
