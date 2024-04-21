import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FileStructure from "./components/FileStructure";
import CodeEditor from "./components/CodeEditor";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ResizablePanelGroup
        direction="horizontal"
        className=" w-full rounded-lg border min-h-screen"
      >
        <ResizablePanel defaultSize={20}>
          <FileStructure />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={70}>
              <CodeEditor />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={30}>
              <Terminal />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
