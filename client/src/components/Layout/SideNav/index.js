import {
  Container,
  End,
  HomeLink,
  List,
  MyIoEarthSharp,
  Name,
  Ol,
  PublicLink,
  PublicList,
  Questions,
  QuestionsLink,
} from './style';

function SideNav() {
  return (
    <Container>
      <HomeLink to="/">Home</HomeLink>
      <List>
        <Name>PUBLIC</Name>
        <Ol>
          <Questions>
            <QuestionsLink to="/questions">
              <MyIoEarthSharp size="18px" />
              Questions
            </QuestionsLink>
          </Questions>
          <PublicList>
            <PublicLink to="/tags">Tags</PublicLink>
          </PublicList>
          <PublicList>
            <PublicLink to="/users">Users</PublicLink>
          </PublicList>
        </Ol>
      </List>
      <List>
        <Name>TEAMS</Name>
        <End />
      </List>
    </Container>
  );
}

export default SideNav;