import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// we only use this syntax 'import * as ...' when the library that we're using doesn't have a 'export default'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Please fill the description of the task'),
  minutesAmount: zod
    .number()
    .min(5, 'The cycle must be greater than 5 minutes')
    .max(60, 'The cycle must be less or equal to 60 minutes'),
})

export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  // the parameter 'data' are the data from the fields of our form
  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  console.log(formState.errors)

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Working on</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Give a name to your project"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="XABLAU" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
