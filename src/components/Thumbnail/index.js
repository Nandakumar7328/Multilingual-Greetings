import {LiContainer, Button} from './styledComponents'

const Thumbnail = props => {
  const {buttonTextData, onChangeId, isSelected} = props
  const {buttonText, id} = buttonTextData
  const buttonDecoration = isSelected ? '#db1c48' : ' #ffffff'
  const textColor = isSelected ? '#ffffff' : '#db1c48'
  const onClickTheButton = () => {
    onChangeId(id)
  }

  return (
    <LiContainer>
      <Button
        type="button"
        textColorCode={textColor}
        bgColor={buttonDecoration}
        onClick={onClickTheButton}
      >
        {buttonText}
      </Button>
    </LiContainer>
  )
}

export default Thumbnail
