import ReactPDF, {
  Document,
  Page,
  Text,
  Link,
  View,
  StyleSheet,
  Font,
  Svg,
  Path,
  Defs,
  Stop,
  Rect,
  LinearGradient,
} from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'
import data from '../public/resume.json'

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
          <View
            style={{
              ...styles.listItem,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Link src={data.urls.linkedin}>
              <MySvg width={13} height={13} viewBox="0 0 15 15">
                <Path
                  fill="#0A66C2"
                  d="M12.7807 12.781H10.5582V9.30032C10.5582 8.47031 10.5434 7.40184 9.40224 7.40184C8.24467 7.40184 8.06756 8.30616 8.06756 9.23989V12.7808H5.84502V5.62306H7.97865V6.60124H8.00852C8.22205 6.23614 8.5306 5.93579 8.90131 5.73218C9.27203 5.52857 9.69103 5.42933 10.1137 5.44502C12.3663 5.44502 12.7816 6.92676 12.7816 8.85441L12.7807 12.781ZM3.33727 4.64465C3.08218 4.6447 2.83279 4.56909 2.62067 4.42741C2.40854 4.28572 2.24321 4.08431 2.14554 3.84864C2.04788 3.61298 2.02229 3.35365 2.07201 3.10344C2.12173 2.85323 2.24453 2.62339 2.42488 2.44298C2.60522 2.26256 2.83501 2.13968 3.08519 2.08986C3.33537 2.04005 3.5947 2.06555 3.83039 2.16313C4.06608 2.26071 4.26754 2.42599 4.4093 2.63807C4.55106 2.85015 4.62675 3.09951 4.6268 3.35461C4.62683 3.52399 4.59349 3.69172 4.52871 3.84822C4.46392 4.00471 4.36895 4.14692 4.24921 4.26671C4.12946 4.3865 3.98729 4.48153 3.83082 4.54638C3.67435 4.61123 3.50664 4.64462 3.33727 4.64465V4.64465ZM4.44853 12.781H2.22369V5.62306H4.44853V12.781ZM13.8887 0.00102197H1.10687C0.816756 -0.00225205 0.537199 0.10979 0.32965 0.312526C0.122101 0.515263 0.00354066 0.792108 0 1.08223V13.9176C0.00341948 14.2078 0.121911 14.4848 0.329452 14.6878C0.536994 14.8907 0.816613 15.003 1.10687 14.9999H13.8887C14.1796 15.0036 14.46 14.8916 14.6683 14.6887C14.8767 14.4857 14.996 14.2084 15 13.9176V1.0813C14.9959 0.790607 14.8765 0.513447 14.6681 0.310715C14.4597 0.107983 14.1794 -0.00373839 13.8887 9.55136e-05"
                />
              </MySvg>
            </Link>

            <Link src={data.urls.github}>
              <MySvg
                width={13}
                height={13}
                viewBox="0 0 15 15"
                style={{ marginLeft: 5 }}
              >
                <Path
                  fill="#24292E"
                  fillRule="evenodd"
                  d="M7.52481 0C3.36108 0 0 3.43995 0 7.70138C0 11.09 2.15711 13.9652 5.16703 14.992C5.56836 15.0434 5.66869 14.838 5.66869 14.6326V13.2977C3.56174 13.7598 3.11025 12.2709 3.11025 12.2709C2.7591 11.398 2.25744 11.1413 2.25744 11.1413C1.55513 10.6792 2.30761 10.6792 2.30761 10.6792C3.06009 10.7306 3.46141 11.4494 3.46141 11.4494C4.11356 12.6303 5.2172 12.2709 5.66869 12.0655C5.71885 11.5521 5.91951 11.244 6.17034 11.0386C4.51488 10.8333 2.7591 10.1658 2.7591 7.2393C2.7591 6.41782 3.06009 5.69902 3.51158 5.1856C3.41125 4.98023 3.16042 4.21009 3.56174 3.13189C3.56174 3.13189 4.21389 2.92652 5.61852 3.90203C6.22051 3.74801 6.87266 3.64532 7.52481 3.64532C8.17695 3.64532 8.8291 3.74801 9.43109 3.90203C10.8859 2.92652 11.4879 3.13189 11.4879 3.13189C11.8892 4.21009 11.6384 4.98023 11.538 5.1856C12.0397 5.69902 12.2905 6.41782 12.2905 7.2393C12.2905 10.2172 10.5347 10.8333 8.87927 11.0386C9.1301 11.2954 9.38092 11.7574 9.38092 12.4762V14.5813C9.38092 14.7867 9.53142 15.0434 9.88258 14.9407C12.8925 13.9138 14.9994 11.0386 14.9994 7.65004C15.0496 3.43995 11.6885 0 7.52481 0Z"
                />
              </MySvg>
            </Link>
            <Text style={{ marginLeft: 5 }}>&#64;{data.username}</Text>
          </View>
          <Link
            src={data.website}
            style={{
              ...styles.listItem,
              ...styles.link,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <MySvg width={10} height={10} viewBox="0 0 10 10">
              <Path
                fill={colors.gray[500]}
                d="M6.64697 1.58553C6.76228 1.46614 6.90021 1.37091 7.05271 1.3054C7.20522 1.23989 7.36924 1.20541 7.53522 1.20397C7.70119 1.20252 7.86579 1.23415 8.01941 1.297C8.17303 1.35985 8.3126 1.45267 8.42996 1.57004C8.54733 1.6874 8.64015 1.82697 8.703 1.98059C8.76585 2.13421 8.79748 2.29881 8.79603 2.46478C8.79459 2.63076 8.76011 2.79478 8.6946 2.94729C8.62908 3.09979 8.53386 3.23772 8.41447 3.35303L6.53947 5.22803C6.30506 5.46237 5.98717 5.59401 5.65572 5.59401C5.32426 5.59401 5.00638 5.46237 4.77197 5.22803C4.65409 5.11418 4.49622 5.05118 4.33234 5.05261C4.16847 5.05403 4.01171 5.11976 3.89583 5.23564C3.77995 5.35152 3.71422 5.50828 3.7128 5.67215C3.71137 5.83603 3.77437 5.9939 3.88822 6.11178C4.35704 6.58046 4.99281 6.84375 5.65572 6.84375C6.31863 6.84375 6.9544 6.58046 7.42322 6.11178L9.29822 4.23678C9.75361 3.76527 10.0056 3.13377 9.9999 2.47828C9.99421 1.82278 9.73129 1.19575 9.26777 0.732233C8.80425 0.268713 8.17721 0.00579055 7.52172 9.45065e-05C6.86623 -0.00560154 6.23473 0.246384 5.76322 0.70178L4.82572 1.63928C4.76603 1.69693 4.71841 1.7659 4.68566 1.84215C4.6529 1.9184 4.63566 2.00042 4.63494 2.0834C4.63422 2.16639 4.65003 2.24869 4.68146 2.3255C4.71288 2.40231 4.75929 2.47209 4.81797 2.53078C4.87666 2.58946 4.94644 2.63587 5.02325 2.66729C5.10006 2.69872 5.18236 2.71453 5.26535 2.71381C5.34833 2.71309 5.43034 2.69585 5.5066 2.66309C5.58285 2.63034 5.65182 2.58272 5.70947 2.52303L6.64697 1.58553V1.58553ZM3.52197 4.71053C3.75638 4.47619 4.07426 4.34455 4.40572 4.34455C4.73718 4.34455 5.05506 4.47619 5.28947 4.71053C5.34712 4.77022 5.41609 4.81784 5.49234 4.85059C5.56859 4.88335 5.65061 4.90059 5.73359 4.90131C5.81658 4.90203 5.89888 4.88622 5.97569 4.85479C6.0525 4.82337 6.12228 4.77696 6.18097 4.71828C6.23965 4.65959 6.28606 4.58981 6.31748 4.513C6.34891 4.43619 6.36472 4.35389 6.364 4.2709C6.36328 4.18792 6.34604 4.1059 6.31328 4.02965C6.28053 3.9534 6.23291 3.88443 6.17322 3.82678C5.7044 3.3581 5.06863 3.09481 4.40572 3.09481C3.74281 3.09481 3.10704 3.3581 2.63822 3.82678L0.76322 5.70178C0.524445 5.9324 0.33399 6.20826 0.202967 6.51327C0.0719446 6.81828 0.00297893 7.14633 9.43919e-05 7.47828C-0.00279015 7.81022 0.0604641 8.13942 0.186166 8.44666C0.311868 8.75391 0.497501 9.03304 0.732233 9.26777C0.966965 9.5025 1.24609 9.68813 1.55334 9.81383C1.86058 9.93954 2.18978 10.0028 2.52172 9.99991C2.85367 9.99702 3.18172 9.92806 3.48673 9.79703C3.79174 9.66601 4.0676 9.47555 4.29822 9.23678L5.23572 8.29928C5.29541 8.24163 5.34303 8.17266 5.37578 8.09641C5.40854 8.02016 5.42578 7.93814 5.4265 7.85516C5.42722 7.77217 5.41141 7.68987 5.37998 7.61306C5.34856 7.53625 5.30215 7.46647 5.24347 7.40778C5.18478 7.3491 5.115 7.30269 5.03819 7.27127C4.96138 7.23984 4.87908 7.22403 4.79609 7.22475C4.71311 7.22547 4.6311 7.24271 4.55484 7.27547C4.47859 7.30822 4.40962 7.35584 4.35197 7.41553L3.41447 8.35303C3.29916 8.47242 3.16123 8.56765 3.00873 8.63316C2.85622 8.69867 2.6922 8.73315 2.52622 8.73459C2.36025 8.73604 2.19565 8.70441 2.04203 8.64156C1.88841 8.57871 1.74884 8.48589 1.63148 8.36852C1.51411 8.25116 1.42129 8.11159 1.35844 7.95797C1.29559 7.80435 1.26397 7.63975 1.26541 7.47378C1.26685 7.3078 1.30133 7.14378 1.36684 6.99127C1.43235 6.83877 1.52758 6.70084 1.64697 6.58553L3.52197 4.71053Z"
              />
            </MySvg>
            <Text style={{ marginLeft: 5 }}>
              {data.website.replace('https://', '')}
            </Text>
          </Link>
          <Link
            src={`mailto:${data.email
              .replace('[at]', '@')
              .replace('[dot]', '.')}`}
            style={[styles.listItem, styles.link]}
          >
            <Text>{data.email.replace('[at]', '@').replace('[dot]', '.')}</Text>
          </Link>
        </View>
      </View>

      {/* Qualities */}
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

      {/* Revised Date */}
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
