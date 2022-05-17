import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  Defs,
  Stop,
  Rect,
  LinearGradient,
} from '@react-pdf/renderer'
import data from '../resume.json'

const MyDocument: any = Document
const MyPage: any = Page
const MyLinearGradient: any = LinearGradient
const MySvg: any = Svg

Font.register({
  family: 'Inter',
  fonts: [
    {
      fontWeight: 'normal',
      src: 'https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.19',
    },
    {
      fontWeight: 'medium',
      src: 'https://rsms.me/inter/font-files/Inter-Medium.woff?v=3.19',
    },
    {
      fontWeight: 'bold',
      src: 'https://rsms.me/inter/font-files/Inter-Bold.woff?v=3.19',
    },
  ],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    backgroundColor: 'white',
    color: 'rgb(75, 85, 99)',
    padding: 40,
    fontSize: 11,
    marginTop: -30,
  },
  section: {
    width: '100%',
    marginTop: 30,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: 5,
    borderBottom: '1.5px solid rgb(229, 231, 235)',
    color: 'black',
  },
  sectionBody: {
    paddingTop: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  subheading: {
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'medium',
    marginTop: 1,
  },
  accentLine: {
    marginTop: 5,
  },
  list: {
    paddingLeft: 5,
    marginBottom: -5,
  },
  listItem: {
    marginTop: 5,
    flexDirection: 'row',
  },
  listBullet: {
    paddingRight: 5,
  },
})

ReactPDF.render(
  <MyDocument>
    <MyPage size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{data.name}</Text>
        <Text style={styles.subheading}>{data.title}</Text>

        <MySvg
          style={styles.accentLine}
          viewBox="0 0 80 3"
          width="80"
          height="3"
        >
          <Defs>
            <MyLinearGradient id="myLinearGradient" x1="0" x2="1" y1="0" y2="0">
              <Stop offset="5%" stopColor="rgb(47, 79, 237)" />
              <Stop offset="95%" stopColor="rgb(47, 159, 237)" />
            </MyLinearGradient>
          </Defs>

          <Rect
            fill="url('#myLinearGradient')"
            x="0"
            y="0"
            width="80"
            height="3"
          />
        </MySvg>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Professional Qualities</Text>
        <View style={styles.sectionBody}>
          <View style={styles.list}>
            {data.qualitites.map((item, idx) => (
              <View key={idx} style={styles.listItem}>
                <Text style={styles.listBullet}>&#x2022;</Text>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </MyPage>
  </MyDocument>,
  `${__dirname}/example.pdf`,
)
