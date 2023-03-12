import {ListItem} from '@rneui/themed';
import Icon from '../../components/Icon';
import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../components/Loading';
import NavHeader from '../../components/navigation/NavHeader/NavHeader';
import styles from './styles';
import {getUserInfomation} from '../../helper/common';

const MyAccount = () => {
  const [personalInformation, setPersonalInformation] = useState({});
  const [userInfo, setUserInfo] = useState([]);
  const {address, city, country, email, name, postcode} = userInfo;

  const [financialState, setFinancialState] = useState({});
  const [expanded, setExpanded] = useState(-1);

  const accordions = [
    {
      icon: 'account',
      title: 'Personal information',
      content: personalInformation,
    },
  ];
  useEffect(() => {
    getUserInfomation().then(userInfo => {
      setUserInfo(userInfo);
    });
  }, []);

  return (
    <ScrollView style={[styles.background, styles.container]}>
      {/* {(loading1 || loading2 || loading3) && <Loading />} */}
      <NavHeader setting isMyAccount showBack type="light">
        My Account
      </NavHeader>
      {accordions.map(({icon, title, content}, i) => (
        <ListItem.Accordion
          key={`accordion-${i}`}
          bottomDivider
          containerStyle={styles.background}
          content={
            <ListItem.Content style={[styles.accordion, styles.row]}>
              <Text> </Text>
              <ListItem.Title style={styles.textWhite}>{title}</ListItem.Title>
            </ListItem.Content>
          }
          expandIcon={
            <Icon source={require('../../../assets/icons/Plus.png')} />
          }
          icon={
            <Icon
              color="white"
              name="chevron-right"
              type="material-community"
            />
          }
          isExpanded={i === expanded}
          leftRotate
          onPress={() => setExpanded(i === expanded ? -1 : i)}>
          {i === expanded &&
            (i === 0 ? (
              <ListItem
                bottomDivider
                containerStyle={[styles.background, styles.padding0]}>
                <ListItem.Content>
                <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Email
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {email}
                      </ListItem.Title>
                    </View>
                  </ListItem>
                  <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Name
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {name}
                      </ListItem.Title>
                    </View>
                  </ListItem>
                  <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Address
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {address}
                      </ListItem.Title>
                    </View>
                  </ListItem>
                  <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Postcode
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {postcode}
                      </ListItem.Title>
                    </View>
                  </ListItem>
                  <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        City
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {city}
                      </ListItem.Title>
                    </View>
                  </ListItem>
                  <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Country
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {country}
                      </ListItem.Title>
                    </View>
                  </ListItem>
                </ListItem.Content>
              </ListItem>
            ) : i === 1 ? (
              content.map((item, j) => (
                <ListItem
                  key={`accordion-${i}-${j}`}
                  containerStyle={styles.background}
                  bottomDivider>
                  <ListItem.Content>
                    <View style={[styles.bankAccount, styles.row]}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        External bank name
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {item.externalBankName}
                      </ListItem.Title>
                    </View>
                    <View style={[styles.bankAccount, styles.row]}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Account number
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {item.accountNumber}
                      </ListItem.Title>
                    </View>
                    <View style={[styles.bankAccount, styles.row]}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Investor name
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {item.investorName}
                      </ListItem.Title>
                    </View>
                    <View style={[styles.bankAccount, styles.row]}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Status
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}>
                        {item.status}
                      </ListItem.Title>
                    </View>
                  </ListItem.Content>
                </ListItem>
              ))
            ) : (
              <ListItem
                bottomDivider
                containerStyle={[styles.background, styles.padding0]}>
                <ListItem.Content>
                  <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Total asset
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}></ListItem.Title>
                    </View>
                  </ListItem>
                  <ListItem bottomDivider containerStyle={styles.background}>
                    <View style={styles.row}>
                      <ListItem.Title
                        style={[styles.container, styles.textWhite]}>
                        Available cash
                      </ListItem.Title>
                      <ListItem.Title
                        style={[
                          styles.container,
                          styles.textRight,
                          styles.textYellow,
                        ]}></ListItem.Title>
                    </View>
                  </ListItem>
                </ListItem.Content>
              </ListItem>
            ))}
        </ListItem.Accordion>
      ))}
    </ScrollView>
  );
};

export default MyAccount;
