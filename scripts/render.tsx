import data from '../public/resume.json'
import type { Style } from '@react-pdf/types'
import ReactPDF, {
  Document,
  Page,
  Text,
  Link,
  View,
  StyleSheet,
  Font,
  Svg,
  Defs,
  Stop,
  Rect,
  LinearGradient,
} from '@react-pdf/renderer'

const filepath = `${__dirname}/../public/resume.pdf`
const date = new Date()

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
      fontWeight: 'semibold',
      src: 'https://rsms.me/inter/font-files/Inter-SemiBold.woff?v=3.19',
    },
  ],
})

const colors = {
  gray: {
    200: 'rgb(229, 231, 235)',
    500: 'rgb(107, 114, 128)',
    600: 'rgb(75, 85, 99)',
    900: 'rgb(17, 24, 39)',
  },
  brand: {
    50: 'rgb(239, 246, 255)',
    700: 'rgb(29, 78, 216)',
    light: 'rgb(47, 159, 237)',
    dark: 'rgb(47, 79, 237)',
  },
}

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    backgroundColor: 'white',
    color: colors.gray[600],
    padding: 40,
    paddingBottom: 0,
    fontSize: 10,
    marginTop: -40,
    position: 'relative',
  },
  section: {
    width: '100%',
    marginTop: 20,
  },
  sectionHeader: {
    fontWeight: 'semibold',
    fontSize: 11,
    paddingBottom: 4,
    borderBottom: `1.5px solid ${colors.gray[200]}`,
    color: 'black',
    width: '100%',
  },
  sectionBody: {
    paddingTop: 10,
    lineHeight: 1.5,
  },
  heading: {
    fontSize: 13,
    fontWeight: 'semibold',
    color: 'black',
  },
  subheading: {
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'medium',
    marginTop: 2,
  },
  accentLine: {
    marginTop: 5,
  },
  list: {
    paddingLeft: 5,
    marginTop: -4,
    maxWidth: '95%',
  },
  listItem: {
    marginTop: 4,
    flexDirection: 'row',
  },
  listBullet: {
    paddingRight: 5,
  },
  link: {
    color: colors.gray[600],
    textDecoration: 'none',
  },
})

const AccentBar = ({ width, height }: { width?: number; height: number }) => (
  <MySvg
    viewBox={`0 0 ${width ?? 1000} ${height}`}
    width={width ?? '100%'}
    height={height}
  >
    <Defs>
      <MyLinearGradient id="myLinearGradient" x1="0" x2="1" y1="0" y2="0">
        <Stop offset="0%" stopColor={colors.brand.dark} />
        <Stop offset="100%" stopColor={colors.brand.light} />
      </MyLinearGradient>
    </Defs>

    <Rect
      fill="url('#myLinearGradient')"
      x="0"
      y="0"
      width={width ?? 1000}
      height={height}
    />
  </MySvg>
)

const List = ({ items, style = {} }: { items: any[]; style?: Style }) => (
  <View style={{ ...styles.list, ...style }}>
    {items.map((item, idx) => (
      <View key={idx} style={styles.listItem}>
        <Text style={styles.listBullet}>&#x2022;</Text>
        <Text>{item}</Text>
      </View>
    ))}
  </View>
)

const HighlightedText = ({
  children,
  style = {},
  ...otherProps
}: {
  children: any
  style?: Style
  otherProps?: any
}) => (
  <Text
    style={{
      backgroundColor: colors.brand[50],
      color: colors.brand[700],
      paddingVertical: 2.5,
      paddingHorizontal: 5,
      borderRadius: 3,
      lineHeight: 1.3,
      textAlign: 'center',
      ...style,
    }}
    {...otherProps}
  >
    {children}
  </Text>
)

ReactPDF.render(
  <MyDocument>
    <MyPage size="Letter" style={styles.page}>
      <View style={{ marginTop: -5, marginHorizontal: -40 }}>
        <AccentBar height={20} />
      </View>

      {/* Header */}
      <View
        style={{
          ...styles.section,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginBottom: -15,
        }}
      >
        <View>
          <Text style={styles.heading}>{data.name}</Text>
          <Text style={styles.subheading}>{data.title}</Text>
          <View style={styles.accentLine}>
            <AccentBar width={80} height={3} />
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            fontWeight: 'medium',
            lineHeight: 1.5,
            marginTop: -2.5,
          }}
        >
          <Text style={styles.listItem}>&#64;{data.username}</Text>
          <Link src={data.website} style={[styles.listItem, styles.link]}>
            {data.website.replace('https://', '')}
          </Link>
          <Link
            src={`mailto:${data.email
              .replace('[at]', '@')
              .replace('[dot]', '.')}`}
            style={[styles.listItem, styles.link]}
          >
            {data.email.replace('[at]', '@').replace('[dot]', '.')}
          </Link>
        </View>
      </View>

      {/* Professional Qualities */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Professional Qualities</Text>
        <View style={styles.sectionBody}>
          <List items={data.qualitites} />
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <View
          style={{
            ...styles.sectionHeader,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>Skills</Text>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 9,
              color: colors.gray[500],
            }}
          >
            Ready and willing to learn anything!
          </Text>
        </View>
        <View style={{ ...styles.sectionBody, marginTop: -10 }}>
          {Object.entries(data.skills).map(([name, items]) => (
            <View
              key={name}
              style={{
                marginTop: 10,
                flexDirection: 'row',
                maxWidth: '100%',
              }}
            >
              <Text
                style={{
                  fontWeight: 'medium',
                  color: 'black',
                  width: '22.5%',
                }}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Text>

              <Text style={{ flex: 1 }}>{items.join(', ')}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Experience</Text>
        <View style={{ ...styles.sectionBody, marginTop: -15 }}>
          {data.experience.map((item, idx) => (
            <View
              key={idx}
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ width: '30.5%' }}>
                <Text style={{ fontWeight: 'medium', color: 'black' }}>
                  {item.position}
                </Text>

                <Text style={{ fontSize: 9 }}>{item.company}</Text>
                <Text style={{ fontSize: 9 }}>{item.location}</Text>
                <View
                  style={{
                    fontSize: 8,
                    fontWeight: 'medium',
                    marginTop: 2.5,
                    alignItems: 'flex-start',
                  }}
                >
                  <HighlightedText>{item.date}</HighlightedText>
                </View>
              </View>

              <View style={{ flex: 1, fontSize: 9, lineHeight: 1.4 }}>
                <List items={item.responsibilities} />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Education</Text>
        <View style={{ ...styles.sectionBody, marginTop: -15 }}>
          {data.education.map((item, idx) => (
            <View
              key={idx}
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ width: '30.5%' }}>
                <Text style={{ fontWeight: 'medium', color: 'black' }}>
                  {item.school}
                </Text>

                <Text style={{ fontSize: 9 }}>{item.location}</Text>
                <Text style={{ fontSize: 9 }}>{item.graduation_date}</Text>
                <View
                  style={{
                    fontSize: 8,
                    fontWeight: 'medium',
                    marginTop: 2.5,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <HighlightedText>GPA: {item.gpa}</HighlightedText>
                  <HighlightedText style={{ marginLeft: 5 }}>
                    Major GPA: {item.gpa_major}
                  </HighlightedText>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Text>{item.description}</Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'medium',
                    color: 'black',
                    fontSize: 9,
                  }}
                >
                  Relevant Courses &amp; Skills
                </Text>
                <View
                  style={{
                    marginTop: 3,
                    flexDirection: 'row',
                    fontSize: 9,
                    lineHeight: 1.4,
                    width: '95%',
                  }}
                >
                  <List
                    style={{ flex: 1, paddingRight: 15 }}
                    items={item.courses.slice(0, item.courses.length / 2 + 1)}
                  />
                  <List
                    style={{ flex: 1, paddingLeft: 15 }}
                    items={item.courses.slice(item.courses.length / 2 + 1)}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Text
        style={{
          position: 'absolute',
          bottom: -10,
          left: 40,
          fontSize: 9,
          lineHeight: 1,
        }}
      >
        Revised{' '}
        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)}{' '}
        {date.getFullYear()}
      </Text>
    </MyPage>
  </MyDocument>,
  filepath,
)
