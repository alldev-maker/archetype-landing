import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabList = [
  {
    title: 'Setup',
    content: 'On Archetype, it can take minutes to integrate and immediately start charging customers based on rate limits, quotas, plans, permissions and more. Analytics into your revenue are updated by minute.',
    image: '/images/ellipse.png'
  },
  {
    title: 'Endpoint Specific Pricing',
    content: 'On Archetype, it can take minutes to integrate and immediately start charging customers based on rate limits, quotas, plans, permissions and more. Analytics into your revenue are updated by minute.',
    image: '/images/ellipse.png'
  },
  {
    title: 'Custom billable metrics',
    content: 'On Archetype, it can take minutes to integrate and immediately start charging customers based on rate limits, quotas, plans, permissions and more. Analytics into your revenue are updated by minute.',
    image: '/images/ellipse.png'
  },
]

const Guide = () => {
  return < section className="section-gap container" >
    <Tabs>
      <TabList>
        {
          tabList.map((item, idx) =>
            <Tab key={idx}>{item.title}</Tab>
          )
        }
      </TabList>
      {
        tabList.map((item, idx) =>
          <TabPanel key={idx}>
            <div className="flex justify-between">
              <div className="lg:max-w-[500px]">
                <h3 className="hidden mb-4 font-semibold text-2xl text-center text-gray lg:block md:font-bold md:text-4xl md:text-left md:mb-6">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-center text-gray md:text-2xl md:text-left">
                  {item.content}
                </p>
              </div>
              <img className="hidden lg:block" src={item.image} alt='guide img' />
            </div>
          </TabPanel>
        )
      }
    </Tabs>
  </section>
}

export default Guide