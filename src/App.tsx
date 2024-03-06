import AboutCard from "./components/about-card"
import CalendarCard from "./components/calendar-card"
import Container from "./components/container"
import Grid from "./components/grid"
import Navbar from "./components/navbar"
import ProfileCard from "./components/profile-card"
import ReposCard from "./components/repos-card"
import Footer from "./components/footer"
import FollowersCard from "./components/followers-card"
import SkillCard from "./components/skill-card"

function App() {
  return (
    <>
      <Container>
          <Navbar />
          <main className="flex flex-col gap-4 px-3">
            <Grid>
              <ProfileCard />
              <AboutCard />
              <SkillCard />
            </Grid>
            <Grid>
              <CalendarCard />
              <ReposCard />
              <FollowersCard />
            </Grid>
          </main>
          <Footer />
      </Container>
    </>
  )
}

export default App
