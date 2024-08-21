import { NextPage } from "next";

interface DevlogPostProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const ids = ["1", "2", "3"];

  return ids.map((id) => ({
    id,
  }));
}

const DevlogPost: NextPage<DevlogPostProps> = ({ params }) => {
  return <div>This is Devlog Post Page of ID {params.id}</div>;
};

export default DevlogPost;
