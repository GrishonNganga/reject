import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Rejected from "./sections/rejected";
import Supported from "./sections/supported";

export default function Sections() {
  return (
    <div className="w-full flex justify-center">
      <Tabs defaultValue="rejected" className="w-full">
        <TabsList className="flex justify-center">
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="supported">Supported</TabsTrigger>
        </TabsList>
        <TabsContent value="rejected">
          <Rejected />
        </TabsContent>
        <TabsContent value="supported">
          <Supported />
        </TabsContent>
      </Tabs>
    </div>
  );
}
