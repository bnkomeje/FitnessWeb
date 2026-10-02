import type { Workout } from '../../types/Workout'

type WorkoutSectionProps = {
  workouts: Workout[]

  setWorkouts:
    React.Dispatch<React.SetStateAction<Workout[]>>

  setCompletedWorkouts:
    React.Dispatch<React.SetStateAction<number>>
}

function WorkoutSection({
  workouts,
  setWorkouts,
  setCompletedWorkouts
}: WorkoutSectionProps) {

  function removeWorkout(id: number) {

    setWorkouts(
      workouts.filter(
        (workout) => workout.id !== id
      )
    )
  }

  function completeWorkout() {

    setCompletedWorkouts(
      (currentTotal) => currentTotal + 1
    )
  }

  function getYouTubeEmbedUrl(videoUrl: string) {

    if (!videoUrl) {
      return ''
    }

    try {

      const url = new URL(videoUrl)

      let videoId = ''

      if (url.hostname.includes('youtu.be')) {

        videoId =
          url.pathname.slice(1)

      } else if (
        url.pathname.startsWith('/shorts/')
      ) {

        videoId =
          url.pathname
            .split('/shorts/')[1]
            ?.split('/')[0] ?? ''

      } else if (
        url.pathname.startsWith('/embed/')
      ) {

        videoId =
          url.pathname
            .split('/embed/')[1]
            ?.split('/')[0] ?? ''

      } else {

        videoId =
          url.searchParams.get('v') ?? ''
      }

      if (videoId) {

        return `https://www.youtube.com/embed/${videoId}`
      }

      return ''

    } catch {

      return ''
    }
  }

  return (
    <section className="workout-section">

      <h2>Your Workouts</h2>

      <p>
        Choose from your available workouts.
      </p>

      <div className="workout-table-wrapper">

        <table className="workout-table">

          <thead>

            <tr>
              <th>Workout</th>
              <th>Video</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {workouts.map((workout) => (

              <tr key={workout.id}>

                <td>
                  {workout.name}
                </td>

                <td>
                  {getYouTubeEmbedUrl(workout.videoUrl)
                    ? 'Available'
                    : 'No Video'}
                </td>

                <td>

                  <div className="workout-actions">

                    <button
                      type="button"
                      onClick={completeWorkout}
                    >
                      ✅Complete
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        removeWorkout(workout.id)
                      }
                    >
                      🗑️Remove
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="exercise-videos">

        <h2>Exercise Videos</h2>

        <p>
          Watch the exercises without leaving the website.
        </p>

        <div className="video-grid">

          {workouts.map((workout) => {

            const embedUrl =
              getYouTubeEmbedUrl(workout.videoUrl)

            if (!embedUrl) {
              return null
            }

            return (

              <div
                className="video-card"
                key={workout.id}
              >

                <h3>
                  {workout.name}
                </h3>

                <div className="video-frame">

                  <iframe
                    src={embedUrl}
                    title={`${workout.name} exercise video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                </div>

              </div>

            )
          })}

        </div>

      </div>

    </section>
  )
}

export default WorkoutSection