import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Fontisto, AntDesign,Ionicons,Octicons,EvilIcons } from '@expo/vector-icons';




export default function App() {
  return (
      <View style={styles.container}>
            <View   style={styles.post}>
              <View style={styles.icon1}>
                <Ionicons name="chevron-back-outline" size={24} color="white" />
                     <View style={styles.seachbox}>
                              
                         <View style={styles.search}>
                         <EvilIcons name="search" size={24} color="#81D4FA" />
                         </View>
                            <Text style={styles.text0}>MAPOTLAKO MAJOANG</Text>  
                     </View>
                   <View style={styles.icon2}><Octicons name="settings" size={24} color="white" />
                   </View>
              </View>   
         
            </View>
            
        <View style={styles.contain}>    
          <View style={styles.postBody}>
            <View style={styles.header}> 
              <Image style={styles.profilepicture}source={require('./PROFILE PICTUERE.png')}/>
                <View style={styles.postDetails}>
                   <Text style={styles.writer}>SELLO MAJOANG</Text>
          
                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                   <Text style={styles.time}>Yesterday</Text>
                   <Fontisto name='world-o' size={15} color='#9E9E9E' />
                 </View>
                 
                 </View>
              </View>
             <View>
                 <Text>
                  Enjoy being the part of IT faculty so that you can enjoy morden technology
                 </Text>
             <Image
              style={styles.postedImage}
              source={require('./posted-picture.jpg')}/>
                </View>
          </View>
        </View>    
            
            
            <View style={styles.footer_at_bottom}>
          <TouchableOpacity style={styles.footerButton}>
                      <AntDesign name='like1' size={24} color='#9E9E9E' />
                      <Text style={styles.footerText}>Like</Text>
          </TouchableOpacity>
            </View>
      </View>
                 
                 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    height:'100%',
    width:'100%'
    
  },
  search:
  {
    marginLeft:5,
    marginRight:5,
    marginTop:3,
    color:'#81D4FA'
    
  },
  contain:
  {
  backgroundColor:'white',
  width:370,
  marginTop:8
  },
 text0:
 {
  marginTop:4,
  color:'white'
 },
seachbox:
{
  backgroundColor:'#0D47A1',
  width:250,
  height:25,
  borderRadius:20,
  marginLeft:20,
  marginRight:20,
  flexDirection:'row',
  justifyContent:'center',
  marginTop:2
  
},
icon2:
{
marginRight:5,
alignItems:'flex-start',
marginBottom:5
},
  post: {
    backgroundColor: '#1976D2',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '100%',
    height: 40,
    flexDirection:'column',
    alignContent: 'center',
    marginTop:25
    
  },
  icon1: 
  {
  marginTop: 5,
  marginLeft:5,
  flexDirection:'row', 
   },
   
  postBody: {
    padding: 10,
  },
  profilepicture: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
  },
  writer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    color: '#9E9E9E',
    marginRight: 5,
    fontSize: 13,
  },
  postedImage: {
    width: '100%',
    height: 200,
  },
  footer_at_bottom: {
    height: 40,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: 'red',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  footerText: {
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',
    fontSize: 20
  },
});
