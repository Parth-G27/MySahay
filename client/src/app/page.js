"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/favicon.ico" // replace with your logo path
            alt="Logo"
            width={60}
            height={60}
          />
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="flex justify-center space-x-4">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Sign In Form */}
          <TabsContent value="signin">
            <form className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input type="email" placeholder="Enter your email" className="mt-1 block w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Input type="password" placeholder="Enter your password" className="mt-1 block w-full" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white mt-4">
                Sign In
              </Button>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
                <span className="text-gray-400">|</span>
                <button type="button" onClick={() => setActiveTab("signup")} className="hover:underline">
                  Sign up instead
                </button>
              </div>
            </form>
          </TabsContent>

          {/* Sign Up Form */}
          <TabsContent value="signup">
            <form className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <Input type="text" placeholder="Enter your name" className="mt-1 block w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input type="email" placeholder="Enter your email" className="mt-1 block w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Input type="password" placeholder="Enter your password" className="mt-1 block w-full" />
              </div>
              <Button type="submit" className="w-full bg-green-600 text-white mt-4">
                Sign Up
              </Button>
              <div className="text-sm text-gray-600 text-center mt-2">
                Already have an account?{" "}
                <button type="button" onClick={() => setActiveTab("signin")} className="text-blue-600 hover:underline">
                  Sign in instead
                </button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
