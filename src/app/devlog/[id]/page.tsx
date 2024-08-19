import { NextPage } from "next";

interface DevlogPostProps {
  params: {
    id: string;
  };
}
const DevlogPost: NextPage<DevlogPostProps> = ({ params }) => {
  return <div>This is Devlog Post Page of ID {params.id}</div>;
};

export default DevlogPost;
