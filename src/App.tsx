import AboutCard from "./components/about-card"
import CalendarCard from "./components/calendar-card"
import Container from "./components/container"
import Grid from "./components/grid"
import Navbar from "./components/navbar"
import ProfileCard from "./components/profile-card"
import ReposCard from "./components/repos-card"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Container>
          <Navbar />
          <main className="flex flex-col gap-3">
            <Grid>
              <ProfileCard />
              <AboutCard />
            </Grid>
            <Grid>
              <CalendarCard />
              <ReposCard />
              <ReposCard />
            </Grid>
          </main>
          <Footer />
      </Container>
    </>
  )
}

export default App
