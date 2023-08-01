import { Pagination, PaginationItem } from '@mui/material';
import useWindowWidth from 'hooks/useWindowWidth';

const PaginationComponent = ({totalPages, page, onChange}) => {
  
  const windowWidth = useWindowWidth();
  const isTablet = windowWidth >= 768;
  const isMobile = windowWidth < 768;

  return (
    <>
      {isMobile && totalPages > 1 && (
        <Pagination 
          count={totalPages}
          page={page}
          onChange={onChange}
          variant='outlined'
          size='small'
          sx={{
            display: 'flex',
            width: '280px',
            margin: '26px auto',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                width: '26px',
                height: '26px',
                color: '#54ADFF',
                backgroundColor: 'transparent',
                borderColor: '#54ADFF',
                '&.Mui-selected': {
                    backgroundColor: '#54ADFF',
                    color: '#FEF9F9',
                    '&:hover': {
                        backgroundColor: '#CCE4FB',
                        color: '#FEF9F9',
                        border: 'none',
                    }
                },
                '&:hover': {
                    backgroundColor: '#CCE4FB',
                    color: '#FEF9F9',
                    border: 'none',
                },                
              }}
              {...item}
            />
          )}          
        />)
      }
      {isTablet && totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={onChange}
          variant='outlined'          
          sx={{
            display: 'flex',
            width: '400px',
            margin: '46px auto',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '&.MuiPagination-ul': {
                display: 'flex',
                gap:'8px',
            },
          }}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                width: '35px',
                height: '35px',
                color: '#54ADFF',
                backgroundColor: 'transparent',
                borderColor: '#54ADFF',
                '&:hover': {
                    backgroundColor: '#CCE4FB',
                    color: '#FEF9F9',
                    border: 'none',
                },
                '&.Mui-selected': {
                  backgroundColor: '#54ADFF',
                  color: '#FEF9F9',
                  '&:hover': {
                      backgroundColor: '#CCE4FB',
                      color: '#FEF9F9',
                      border: 'none',
                    }
                  },                
              }}
              {...item}
            />
          )}          
        />)
      }
    </>
  )     
};

export default PaginationComponent;
