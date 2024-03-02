//import  types
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Package Page",
  description: "Page for specific package",
};

type PackageParams = {
  packageId: string;
}

export default function PackageComponent({ params }: PackageParams): React.JSX.Element {
  const { packageId } = params
  return (
    <>
      PackageComponent {packageId}
    </>
  );
}
