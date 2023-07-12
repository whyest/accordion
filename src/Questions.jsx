import SingleQuestion from './SingleQuestion'

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
      <h2 className='title' style={{ marginBottom: '2rem' }}>
        Questions
      </h2>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}
export default Questions
