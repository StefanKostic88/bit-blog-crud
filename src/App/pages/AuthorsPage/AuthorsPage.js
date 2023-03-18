import { ContentWraper } from "../../components";

import { AuthorsList } from "../../components";
import { dummyAuthorsData } from "../../../enitities/authorsData/dummyAuthorsData";

const AuthorsPage = () => {
  return (
    <ContentWraper pageTitle="AUTHORS">
      <div>
        {dummyAuthorsData.map((author, index) => (
          <AuthorsList key={`${author.fullName}-${index}`} {...author} />
        ))}
      </div>
    </ContentWraper>
  );
};

export default AuthorsPage;
